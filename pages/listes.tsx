import GenericTable from './components/GenericTable';
import GenericTableSm from './components/GenericTableSm';

const App = () => {
  const liste1 = [{
    "name": "Courtney Henry",
    "title": "Designer",
    "email": "courtney.dedffe@defef.com",
    "role": "Admin"
  },
  {
    "name": "Linda Watson",
    "title": "Developer",
    "email": "linda_watson@gree.com",
    "role": "Member"
  },
  {
    "name": "Richard Louis",
    "title": "Director",
    "email": "richardlouis@defef.com",
    "role": "Member"
  },
  {
    "name": "Steve Renold",
    "title": "Sailor",
    "email": "steve.renold@defef.com",
    "role": "Member"
  },
  {
    "name": "Luc Byrne",
    "title": "Author",
    "email": "luc.byrne@defef.com",
    "role": "Member"
  }];

  const liste2 = [
    {
      "ville": "Nancy",
      "surface": "15.01",
      "habitants": "104000"
    },
    {
      "ville": "Nantes",
      "surface": "65.06",
      "habitants": "325000"
    },
    {
      "ville": "Villeurbanne",
      "surface": "14.52",
      "habitants": "152000"
    },
    {
      "ville": "Levallois-Perret",
      "surface": "2.41",
      "habitants": "68000"
    }
  ];

  console.log(liste1);

  return (
    <>
      <div className="sm:flex hidden">
        <div className="container mx-auto px-4">
          <GenericTable title="Tableau 1" data={liste1} />
          <br></br>
          <GenericTable title="Tableau 2" data={liste2} />
        </div>
      </div>
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="container mx-auto px-4">
          Tableau 1
          {liste1.map((liste) => (
            <GenericTableSm title = "Tableau 1" data = { liste } />))}
          <br></br>
          Tableau 2
          {liste2.map((liste) => (
            <GenericTableSm title="Tableau 2" data={liste} />))}
        </div>
      </div>
    </>
  );
};

export default App;
