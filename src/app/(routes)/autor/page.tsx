const autorPage = () => {
  return (
    <div className="flex flex-col h-[87vh] pt-12 gap-y-5 max-w-4xl mx-auto">
      <div className="flex justify-center items-center">
        <p className="text-5xl font-semibold">Autor</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center text-lg gap-y-5">
        <p>
          Ime mi je Manuel Radaljac i učenik sam Srednje poljoprivredne i
          tehničke škole Opuzen, smjer Web dizajner. Programiranje me zanima već
          nekoliko godina, posebice web aplikacije i JavaScript frameworkovi.
        </p>
        <p>
          Sudjelovao sam na Infokupu 2022. godine s web aplikacijom Web3 i
          osvojio prvo mjesto na županijskoj razini. Ovaj projekt je moj drugi
          samostalan rad za Infokup i nadam se da će ostvariti dobre rezultate.
        </p>
      </div>
    </div>
  );
};

export default autorPage;
