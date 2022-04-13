
import Button from './Button'
import './Nav.css'

function Nav(){
    const navigate = (url) => {
        window.location.href = url
    }
    const login = (url)=>navigate(url)
    

    return (
        <div className="nav-container">
            <Button size="small" color="tomato" callUrl={() => login("https://www.google.co.kr/")} >구글</Button>
            <Button size="small" color="tomato" callUrl={() => login("https://www.naver.com/")}>네이버</Button>
            <Button size="small" color="tomato" callUrl={() => login("https://dict.naver.com/")}>사전 검색</Button>
        </div>
    )
}

export default Nav