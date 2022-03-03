import './Footer.css';

function Footer(props) {
  
  return(
    <footer class="my-footer">
      <p>Author: Lien Trinh</p>
      <p><a href="mailto:hege@example.com">hege@example.com</a></p>
      <p>This is page {props.pageName}</p>
      <p>Show me a number {props.number}</p>
    </footer>
  )
}

export default Footer;
