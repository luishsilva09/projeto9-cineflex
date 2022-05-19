import styled from 'styled-components';
export default function MovieBanner({poster, title}){
    return(
        <>
            <Banner onClick={() => console.log(title)}>
                <img  src={poster} alt={title}></img>
            </Banner>
        </>
    )
}

const Banner = styled.div`
    height: 209px;
    width: 145px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    margin-bottom:11px;

    img{
        width: 129px;
        height: 193px;
    }

`