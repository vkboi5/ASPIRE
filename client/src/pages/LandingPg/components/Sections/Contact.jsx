import React from "react";
import styled from "styled-components";
// Assets
import Logo from "../../../../assets/mini_logo.png"
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Feedback </h1>
            <p className="font13">
            Feedback related to content, design or technology with respect to the National Portal of India (NPI) can be sent through this interface.
              <br />
              This portal in no way could redress query/feedback/grievances pertaining to a particular Ministry/Department/Government Body.


            </p>
          </HeaderInfo>
          <div className="row pl-20" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12  rounded-md col-sm-12 col-md-6 col-lg-6">
              <Form>
                <InputWrapper>
                  <Input className="rounded-md"
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Name"
                  />
                </InputWrapper>
                <InputWrapper>
                  <Input
                    name="email"
                    type="text"
                    id="email"
                    placeholder="Email"
                  />
                </InputWrapper>
                <TextAreaWrapper>
                  <Textarea
                    name="text"
                    id="comment"
                    placeholder="Comment"
                  />
                </TextAreaWrapper>
                <SubmitWrapper>
                  <SubmitButton type="submit" value="SEND" />
                </SubmitWrapper>
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              
              <div style={{ width: "70%" }}>
                <div style={{ marginTop: "40px" }}>
                  <img src={Logo} alt="office" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Form = styled.form`
  padding: 35px;
  background-color: rgba(72, 72, 72, 0.4);
  border-radius: 7px;
  width: 450px;
  margin: 30px auto;
`;

const InputWrapper = styled.p`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 13px 13px 54px;
  border: 3px solid rgba(0, 0, 0, 0);
  border-radius: 0;
  background-color: #fbfbfb;
  color: #3c3c3c;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 22px;
  outline: none;
  box-sizing: border-box;
  background-image: ${(props) => props.backgroundImage};
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;

  &:focus {
    background-color: #fff;
    border: 3px solid #3498db;
    color: #3498db;
    background-image: ${(props) => props.focusBackgroundImage};
  }
`;

const TextAreaWrapper = styled.p`
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  line-height: 150%;
  resize: vertical;
  padding: 13px 13px 13px 54px;
  border: 3px solid rgba(0, 0, 0, 0);
  border-radius: 0;
  background-color: #fbfbfb;
  color: #3c3c3c;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 22px;
  outline: none;
  box-sizing: border-box;
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;

  &:focus {
    background-color: #fff;
    border: 3px solid #3498db;
    color: #3498db;
  }
`;

const SubmitWrapper = styled.div`
  margin-top: 20px;
`;

const SubmitButton = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #fbfbfb;
  background-color: #3498db;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #0493bd;
  }
`;

const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
