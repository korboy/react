import './TeamBackGround.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-scroll"
import styled from "styled-components"



function NavBar() {

    return (
        <div >
            <Header />
            <Nextpage />
        </div>
    );
}

function Header() {

    const Div = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    color:white;
    font-size:3rem;
    margin-bottom: 500px;
    text-align: center;
    
    div {
        display: flex;
        flex-direction: column;
      }
    `
    const SideDiv = styled.div` 
    font-size: 3rem;
    margin-top: 800px;
    text-align : center;
    div {
      display: flex;
      flex-direction: column;
    }
  `

    return (
        <div class="img">
            <nav class="navbar navbar-expand-lg navbar-white bg navbar fixed-top navbar-collapse ">
                <div class="collapse navbar-collapse justify-content-center"><a class="navbar-brand " href="#"> <img
                    alt=""
                    src="/img/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                /> Toss</a></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse  justify-content-center" id="navbarNav" >
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="#" >회사소개 <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">고객센터</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">자주 묻는 질문</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">공동인증서 관리</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">채용</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Div>
                <div>금융, 그 이상의<br/>
                    역사를 만들고 있습니다</div>
            </Div>
            <SideDiv>
                <Link to="next" smooth={true}>
                    <div>click me<br />⇣</div>
                </Link>
            </SideDiv>
        </div>


    )
}

function Nextpage() {
    return (
        <div className='img1' id='next'></div>
    )
}


export default NavBar;