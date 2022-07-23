const footerHtml = `
    <ul class="contato">
        <li><a href="mailto:informaticadesktopa@gmail.com" target="_blank">
            <i class="fa fa-envelope"></i>
            <span>informaticadesktopa@gmail.com</span>
        </a></li>
        <li><a href="https://instagram.com/desktopa_informatica" target="_blank">
            <i class="fa fa-instagram"></i>
            <span>@desktopa_informatica</span>
        </a></li>
        <li><a href="https://wa.me/5547992523361" target="_blank">
            <i class="fa fa-whatsapp"></i>
            <span><span class="ddd">(47)</span> 99252-3361</span>
        </a></li>
        <li><a href="tel:5547992523361" target="_blank">
            <i class="fa fa-phone"></i>
            <span><span class="ddd">(47)</span> 99252-3361</span>
        </a></li>
    </ul>
    <small class="footer__copyright">
        © Desktopa Informatica Ltda. Todos os Direitos Reservados.
    </small>
    </ul>
`;

const footerEl = document.getElementById("footer");
footerEl.innerHTML = footerHtml;

