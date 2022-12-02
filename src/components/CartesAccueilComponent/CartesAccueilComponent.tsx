import './CartesAccueilComponent.css';

 
type CartesAccueilComponentProps = {
  title: string,
  paragraph: string[],
  couleur: string
}

const CartesAccueilComponent = ({ title, paragraph, couleur }: CartesAccueilComponentProps) => {
  const compStyle = {
    
  }

  return (
  <aside>
      <div className="card card-1">
        <div className="card__icon">
          <h2>{ title }</h2>
        </div>
        <div className="containerParagraph">
          {paragraph.map((paragraph)=>{
              return <h3 className="card__paragraph">{paragraph}</h3>
          })}
        </div>
      </div>
  </aside>)
  }

export default CartesAccueilComponent;