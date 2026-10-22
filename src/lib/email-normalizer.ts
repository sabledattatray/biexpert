/**
 * Security Remediation: GHSA-7rqj-j65f-68wh
 * Unicode NFKC email normalizer & validator.
 *
 * Prevents homoglyph '@' bypass attacks (e.g. U+FF20 fullwidth commercial at '＠',
 * U+FE6B small commercial at '﹫') by:
 * 1. Performing Unicode NFKC normalization BEFORE validation.
 * 2. Enforcing that the normalized string contains EXACTLY ONE ASCII '@' (U+0040).
 * 3. Enforcing RFC standard email structure (non-empty local part and domain part).
 * 4. Lowercasing and trimming the normalized address.
 */

export interface EmailNormalizationResult {
  isValid: boolean;
  normalizedEmail?: string;
  error?: string;
}

export function normalizeAndValidateEmail(rawEmail: unknown): EmailNormalizationResult {
  if (typeof rawEmail !== "string") {
    return { isValid: false, error: "Email must be a string." };
  }

  // 1. Trim surrounding whitespace
  const trimmed = rawEmail.trim();
  if (!trimmed) {
    return { isValid: false, error: "Email address cannot be empty." };
  }

  // 2. Unicode NFKC normalization BEFORE validation
  const normalized = trimmed.normalize("NFKC");

  // 3. Reject if containing anything other than exactly one ASCII '@' (U+0040 / charCode 64)
  let atCount = 0;
  for (let i = 0; i < normalized.length; i++) {
    if (normalized.charCodeAt(i) === 0x40) {
      atCount++;
    }
  }

  if (atCount !== 1) {
    return {
      isValid: false,
      error: atCount === 0
        ? "Email address must contain an '@' symbol."
        : "Email address cannot contain multiple '@' symbols."
    };
  }

  // 4. Split into local and domain parts
  const atIndex = normalized.indexOf("@");
  const localPart = normalized.slice(0, atIndex);
  const domainPart = normalized.slice(atIndex + 1);

  // 5. Validate local part
  if (!localPart || localPart.length > 64) {
    return { isValid: false, error: "Invalid email local part." };
  }

  // Reject invalid leading/trailing dots in local part or double dots
  if (localPart.startsWith(".") || localPart.endsWith(".") || localPart.includes("..")) {
    return { isValid: false, error: "Email local part contains invalid period placement." };
  }

  // 6. Validate domain part
  if (!domainPart || domainPart.length > 255) {
    return { isValid: false, error: "Invalid email domain part." };
  }

  // Domain must contain at least one dot, cannot start/end with dot or hyphen
  if (!domainPart.includes(".")) {
    return { isValid: false, error: "Email domain must contain a top-level domain." };
  }

  if (domainPart.startsWith(".") || domainPart.endsWith(".") || domainPart.startsWith("-") || domainPart.endsWith("-")) {
    return { isValid: false, error: "Email domain contains invalid boundary characters." };
  }

  // Reject double dots in domain
  if (domainPart.includes("..")) {
    return { isValid: false, error: "Email domain contains consecutive dots." };
  }

  // Basic RFC 5322 sanity pattern check on normalized form
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(normalized)) {
    return { isValid: false, error: "Email format is invalid." };
  }

  return {
    isValid: true,
    normalizedEmail: normalized.toLowerCase()
  };
}
