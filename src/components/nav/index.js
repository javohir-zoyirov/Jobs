import "./style.css";

export const Nav = () => {
    return<>
    <nav class="navbar navbar-expand-lg w-100 h-100 bg-black">
  <div class="container-fluid">
    <a class="navbar-brand text-white fw-bold" href="#">LuckyJob</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Find job</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Massages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Hiring</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Community</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">FAQ</a>
        </li>
      </ul>
      <span class="navbar-text">
       <div>
       <span className="d-flex align-items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill text-white fw-bold" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
       </svg> 
        <p className="p-0 m-0 text-white fw-bold">Tashkent</p>
       </span>
       </div>
      </span>
    </div>
  </div>
</nav>
    </>
}