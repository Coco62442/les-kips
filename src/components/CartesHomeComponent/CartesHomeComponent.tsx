import './CartesHomeComponent.css';


type CartesHomeComponentProps = {
  title: string,
  paragraph: string[]
}

const CartesHomeComponent = ({ title, paragraph }: CartesHomeComponentProps) => <aside>
  <h3>{ title }</h3>

  <ul>
     {paragraph.map((paragraph)=>{
         return <li>{paragraph}</li>
     })}
 </ul>
</aside>

export default CartesHomeComponent;