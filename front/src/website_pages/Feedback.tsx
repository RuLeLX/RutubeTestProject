import Header from "../components/Evaluation/Header";
import Divider from "../components/Evaluation/Divider";
import styled from "styled-components";
import Image from "../components/Feedback/image";
import TextContent from "../components/Feedback/TextContent";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Center = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    width: 1053px;
    max-width: 1053px;
    height: 433px;
`

const FrameImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0px;

    width: 1053px;
    height: 256px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;`

export default function Feedback() {
    const navigate = useNavigate();

    //if test was finished in past then redirect in /dejavu
    useEffect(() => {
            if (localStorage.length == 7) {
                navigate("/feedback");

            }
            else if (localStorage.length == 8) navigate("/dejavu");
            else if (localStorage.length == 0) navigate("/");
            else if (localStorage.length >= 1 && localStorage.length < 7) navigate("/questions");

    }, []);

    return (
        <div>
            <Header/>
            <Divider/>
            <Center>
                <FrameImage>
                    <Image/>
                </FrameImage>
                <TextContent/>
            </Center>
        </div>
    );
}