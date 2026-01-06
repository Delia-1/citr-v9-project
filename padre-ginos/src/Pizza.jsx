// export const Pizza = (props) => {
const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      {/* // On peut metre dans les curly tout ce qui pourrait se trouver à droite
      d'une expression x= "coucou".toLowerCase */}
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Pizza;
// export const Pizza
// Normalement c'est bien le default vu que un composant une reponsabilité un export
// Mais si besoin alors named export et import, pour importer differentes fonctions/composants d'un fichier
