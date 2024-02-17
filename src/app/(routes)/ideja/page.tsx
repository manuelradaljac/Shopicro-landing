const idejaPage = () => {
  return (
    <div className="flex flex-col h-[87vh] pt-12 gap-y-5 max-w-4xl mx-auto">
      <div className="flex justify-center items-center">
        <p className="text-5xl font-semibold">Ideja</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center text-lg gap-y-5">
        <p className="text-xl">
          Inspiracija za ovaj projekt proizašla je iz moje želje da naučim
          Next.js framework i TypeScript kako bih poboljšao svoje znanje. Nakon
          određenog istraživanja o tome što bih mogao napraviti, odlučio sam se
          za izradu admin dashboarda i web trgovine.
        </p>
      </div>
    </div>
  );
};

export default idejaPage;
