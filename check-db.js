const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const postCount = await prisma.post.count();
  const userCount = await prisma.user.count();
  const subCount = await prisma.subscriber.count();
  
  console.log(`Database Stats:`);
  console.log(`- Posts: ${postCount}`);
  console.log(`- Users: ${userCount}`);
  console.log(`- Subscribers: ${subCount}`);
  
  if (postCount > 0) {
    const posts = await prisma.post.findMany({ take: 5, select: { title: true } });
    console.log(`\nSample Posts:`);
    posts.forEach(p => console.log(`- ${p.title}`));
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
