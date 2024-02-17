const tehnologijePage = () => {
  return (
    <div className="flex flex-col h-[87vh] pt-12 gap-y-5 max-w-4xl mx-auto">
      <div className="flex justify-center items-center">
        <p className="text-5xl font-semibold">Tehnologije</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center text-lg gap-y-5">
        <p className="text-xl">
          Za ovaj projekt je korišten framework Next.js 14 sa typescriptom, shadcn za ui komponente, MySQL za
          pohranu podataka, Prisma orm za interakciju backenda sa bazom podataka
          i Clerk za autentifikaciju korisnika.
        </p>
      </div>
    </div>
  );
};

export default tehnologijePage;
