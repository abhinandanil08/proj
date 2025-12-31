import FootStyle from "./Footer.module.css"
function Footer()
{
    return(
    <div className={FootStyle.foot}>
        <nav class="navbar fixed-bottom bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">&copy;2025 My App Limited</a>
            </div>
        </nav>
    </div>



    );


}
export default Footer   