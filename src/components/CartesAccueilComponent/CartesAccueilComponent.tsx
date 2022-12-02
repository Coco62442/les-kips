import './CartesAccueilComponent.css';

 
type CartesAccueilComponentProps = {
  title: string,
  paragraph: string[],
  couleur: string
}

const CartesAccueilComponent = ({ title, paragraph, couleur }: CartesAccueilComponentProps) => {
  const compStyle = {
    background: couleur
  }
  return (<aside>
    <div className="CartesAccueilComponent" style={compStyle}>
      <h3>{ title }</h3>

      <ul>
        {paragraph.map((paragraph)=>{
            return <li>{paragraph}</li>
        })}
      </ul>
    </div>
    
  </aside>)
  }

export default CartesAccueilComponent;