import { getImageUrl } from './Components/BioCard/Utilities.js'

function Avatar({person, size}) {
  return ( 
  

  <img 
  className="Avatar"
  src={getImageUrl(person)} 
  alt={person.name} 
  width={size}
  height={size}
  />
  

    
  );
}

export default function biocard() {
return (
  <div>
    <Avatar
      size={100}
      person={{
        name: "Katsuko Saruhashi",
        imageId: "YfeOqp2",
      }}
    />
    <Avatar
      size={80}
      person={{
        name: "Aklilu Lemma",
        imageId: "OKS67lh",
      }}
    />
    <Avatar
      size={50}
      person={{
        name: "Lin Lanying",
        imageId: "1bX5QH6",
      }}
    />
  </div>
);
}