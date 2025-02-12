// 필요한 라이브러리와 컴포넌트 import
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState, useRef, createRef } from "react";
import computer from "../../assets/video/computer.mp4";
import { Opacity } from "@mui/icons-material";

// 메인 페이지의 전체 래퍼 컴포넌트
// min-height를 100vh로 설정하여 최소한 화면 높이만큼 확보
const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
    font-family: 'Arial', sans-serif; // 원하는 기본 폰트를 여기에 지정
`;

// 스크롤 가능한 영역을 생성하는 컨테이너
const ScrollContainer = styled.div`
  width: 100%;
  height: 600%;  // 20개 섹션을 위해 2000vh로 변경
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`;

// 배경 비디오를 위한 스타일 컴포넌트
// fixed 포지션으로 화면에 고정되며, 전체 화면을 커버
const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: cover;
`;

const Letter = styled.span`
  position: fixed;
  font-size: ${props => props.fontSize}px;
  color: white;
  z-index: 1;
  transition: all 0.5s ease;
  transform-origin: center center;
  pointer-events: none;
  white-space: nowrap;  // 텍스트가 길어져도 한 줄로 유지
  
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  transform: translate(-50%, -50%);
`;

const Sentence = styled.span`
  position: fixed;
  font-size: ${props => props.fontSize}px;
  color: rgba(255, 255, 255, ${props => props.opacityValue}); // opacity 대신 color의 alpha 값으로 변경
  z-index: 1;
  transition: all 0.8s ease;
  transform-origin: center center;
  pointer-events: none;
  white-space: nowrap;
  
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  transform: translate(-50%, -50%);
`;

// 각 섹션을 위한 스타일 컴포넌트
// 높이를 100vh로 설정하여 전체 화면 높이를 차지
const Section = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  position: relative;
`;

// Intersection Observer의 관찰 대상이 될 요소
// top prop으로 위치 조절 가능
const Observer = styled.div`
  position: absolute;
  top: ${props => props.top}%;
  height: 1px;
  width: 100%;
  background: transparent;
`;

const ApplyButton = styled.button`
  position: fixed;
  padding: 10px 20px;
  font-size: 18px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const MainPage = () => {

  const navigate = useNavigate();
  const [isLastSectionVisible, setIsLastSectionVisible] = useState(false);

  // 각 글자의 스타일과 내용을 함께 관리
  const sectionAnimations = {
    1: {
      letters: {
        letter1: { text: "P", fontSize: 400, top: 50, left: 35 },
        letter2: { text: "N", fontSize: 400, top: 50, left: 50 },
        letter3: { text: "N", fontSize: 400, top: 50, left: 65 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 30, top: 60, left: 35, opacityValue: 0 },
        sentence2: { text: "And", fontSize: 30, top: 60, left: 50, opacityValue: 0 },
        sentence3: { text: "Network", fontSize: 30, top: 60, left: 65, opacityValue: 0 }
      }
    },
    2: {
      letters: {
        letter1: { text: "P", fontSize: 400, top: 50, left: 35 },
        letter2: { text: "N", fontSize: 400, top: 50, left: 50 },
        letter3: { text: "N", fontSize: 400, top: 50, left: 65 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 30, top: 60, left: 35, opacityValue: 0 },
        sentence2: { text: "And", fontSize: 30, top: 60, left: 50, opacityValue: 0 },
        sentence3: { text: "Network", fontSize: 30, top: 60, left: 65, opacityValue: 0 }
      }
    },
    3: {
      letters: {
        letter1: { text: "P", fontSize: 150, top: 50, left: 35 },
        letter2: { text: "N", fontSize: 150, top: 50, left: 50 },
        letter3: { text: "N", fontSize: 150, top: 50, left: 65 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 30, top: 60, left: 35, opacityValue: 0 },
        sentence2: { text: "And", fontSize: 30, top: 60, left: 50, opacityValue: 0 },
        sentence3: { text: "Network", fontSize: 30, top: 60, left: 65, opacityValue: 0 }
      }
    },
    4: {
      letters: {
        letter1: { text: "P", fontSize: 150, top: 50, left: 25 },
        letter2: { text: "N", fontSize: 150, top: 50, left: 30 },
        letter3: { text: "N", fontSize: 150, top: 50, left: 35 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 30, top: 60, left: 35, opacityValue: 0 },
        sentence2: { text: "And", fontSize: 30, top: 60, left: 50, opacityValue: 0 },
        sentence3: { text: "Network", fontSize: 30, top: 60, left: 65, opacityValue: 0 }
      }
    },
    5: { // 여기네 ㅅㅂ 레터가 올라가기 시작하는 부분임
      letters: {
        letter1: { text: "P", fontSize: 150, top: 25, left: 25 },
        letter2: { text: "N", fontSize: 150, top: 25, left: 30 },
        letter3: { text: "N", fontSize: 150, top: 25, left: 35 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 30, top: 60, left: 35, opacityValue: 0 },
        sentence2: { text: "And", fontSize: 30, top: 60, left: 50, opacityValue: 0 },
        sentence3: { text: "Network", fontSize: 30, top: 60, left: 65, opacityValue: 0 }
      }
    },
    6: {
      letters: {
        letter1: { text: "P", fontSize: 150, top: 25, left: 25 },
        letter2: { text: "N", fontSize: 150, top: 25, left: 30 },
        letter3: { text: "N", fontSize: 150, top: 25, left: 35 }
      },
      sentences: {  // 여기서부터 sentence 등장이 맞긴 함
        sentence1: { text: "Programming", fontSize: 150, top: 40, left: 50, opacityValue: 0 },
        sentence2: { text: "And", fontSize: 150, top: 55, left: 28, opacityValue: 0 },
        sentence3: { text: "Network", fontSize: 150, top: 70, left: 45, opacityValue: 0 }
      }
    },
    7: {
      letters: {
        letter1: { text: "P", fontSize: 150, top: 25, left: 25 },
        letter2: { text: "N", fontSize: 150, top: 25, left: 30 },
        letter3: { text: "N", fontSize: 150, top: 25, left: 35 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 150, top: 40, left: 55, opacityValue: 0 },
        sentence2: { text: "And", fontSize: 150, top: 55, left: 29, opacityValue: 0 },
        sentence3: { text: "Network", fontSize: 150, top: 70, left: 45, opacityValue: 0 }
      }
    },
    8: {
      letters: {
        letter1: { text: "P", fontSize: 150, top: 25, left: 25 },
        letter2: { text: "N", fontSize: 150, top: 25, left: 30 },
        letter3: { text: "N", fontSize: 150, top: 25, left: 35 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 150, top: 40, left: 55, opacityValue: 0.5 },
        sentence2: { text: "And", fontSize: 150, top: 55, left: 29, opacityValue: 0 },
        sentence3: { text: "Network", fontSize: 150, top: 70, left: 45, opacityValue: 0 }
      }
    },
    9: {
      letters: {
        letter1: { text: "P", fontSize: 150, top: 25, left: 25 },
        letter2: { text: "N", fontSize: 150, top: 25, left: 30 },
        letter3: { text: "N", fontSize: 150, top: 25, left: 35 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 150, top: 40, left: 55, opacityValue: 1 },
        sentence2: { text: "And", fontSize: 150, top: 55, left: 29, opacityValue: 0.5 },
        sentence3: { text: "Network", fontSize: 150, top: 70, left: 46, opacityValue: 0 }
      }
    },
    10: {
      letters: {
        letter1: { text: "P", fontSize: 150, top: 25, left: 25 },
        letter2: { text: "N", fontSize: 150, top: 25, left: 30 },
        letter3: { text: "N", fontSize: 150, top: 25, left: 35 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 150, top: 40, left: 55, opacityValue: 1 },
        sentence2: { text: "And", fontSize: 150, top: 55, left: 29, opacityValue: 1 },
        sentence3: { text: "Network", fontSize: 150, top: 70, left: 46, opacityValue: 0.5 }
      }
    },
    11: {
      letters: {
        letter1: { text: "P", fontSize: 150, top: 25, left: 25 },
        letter2: { text: "N", fontSize: 150, top: 25, left: 30 },
        letter3: { text: "N", fontSize: 150, top: 25, left: 35 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 150, top: 40, left: 55, opacityValue: 1 },
        sentence2: { text: "And", fontSize: 150, top: 55, left: 29, opacityValue: 1 },
        sentence3: { text: "Network", fontSize: 150, top: 70, left: 46, opacityValue: 1 }
      }
    },
    12: {
      letters: {
        letter1: { text: "P", fontSize: 150, top: 25, left: 25 },
        letter2: { text: "N", fontSize: 150, top: 25, left: 30 },
        letter3: { text: "N", fontSize: 150, top: 25, left: 35 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 150, top: 40, left: 55, opacityValue: 1 },
        sentence2: { text: "And", fontSize: 150, top: 55, left: 29, opacityValue: 1 },
        sentence3: { text: "Network", fontSize: 150, top: 70, left: 46, opacityValue: 1 }
      }
    },
    11: {
      letters: {
        letter1: { text: "P", fontSize: 150, top: 25, left: 25 },
        letter2: { text: "N", fontSize: 150, top: 25, left: 30 },
        letter3: { text: "N", fontSize: 150, top: 25, left: 35 }
      },
      sentences: {
        sentence1: { text: "Programming", fontSize: 150, top: 40, left: 55, opacityValue: 1 },
        sentence2: { text: "And", fontSize: 150, top: 55, left: 29, opacityValue: 1 },
        sentence3: { text: "Network", fontSize: 150, top: 70, left: 46, opacityValue: 1 }
      }
    },
    12: {
      letter1: { text: "P", fontSize: 100, top: 50, left: 45 },
      letter2: { text: "&", fontSize: 100, top: 50, left: 50 },
      letter3: { text: "N", fontSize: 100, top: 50, left: 55 }
    },
    sentences: {
      sentence1: { text: "Programming", fontSize: 150, top: 40, left: 55, opacityValue: 0 },
      sentence2: { text: "And", fontSize: 150, top: 55, left: 28, opacityValue: 0 },
      sentence3: { text: "Network", fontSize: 150, top: 70, left: 45, opacityValue: 0 }
    }
  };

  // 초기 상태 설정
  const [letter1, setLetter1] = useState({
    text: "P",
    fontSize: 150,
    top: 50,
    left: 40
  });
  
  const [letter2, setLetter2] = useState({
    text: "N",
    fontSize: 150,
    top: 50,
    left: 50
  });
  
  const [letter3, setLetter3] = useState({
    text: "N",
    fontSize: 150,
    top: 50,
    left: 55
  });

  const [sentence1, setSentence1] = useState({
    text: "Programming",
    fontSize: 150,
    top: 40,
    left: 55,
    opacityValue: 0
  });

  const [sentence2, setSentence2] = useState({
    text: "And",
    fontSize: 150,
    top: 50,
    left: 55,
    opacityValue: 0
  });

  const [sentence3, setSentence3] = useState({
    text: "Network",
    fontSize: 150,
    top: 50,
    left: 55,
    opacityValue: 0
  });
  
  const sectionRefs = useRef(Array(12).fill(null).map(() => createRef()));

  useEffect(() => {
    const options = {
      threshold: [0.5],
      rootMargin: '0px',
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionNumber = parseInt(entry.target.dataset.section);
          
          // 마지막 섹션에 대한 특별한 처리
          if (sectionNumber === 12) {
            setIsLastSectionVisible(true);
          } else {
            setIsLastSectionVisible(false);
          }

          const animation = sectionAnimations[sectionNumber];
          
          if (animation) {
            if (animation.letters && animation.sentences) {
              // 새로운 구조를 사용하는 섹션의 경우
              setLetter1(animation.letters.letter1);
              setLetter2(animation.letters.letter2);
              setLetter3(animation.letters.letter3);
              setSentence1(animation.sentences.sentence1);
              setSentence2(animation.sentences.sentence2);
              setSentence3(animation.sentences.sentence3);
            } else {
              // 이전 구조를 사용하는 섹션의 경우
              setLetter1(animation.letter1);
              setLetter2(animation.letter2);
              setLetter3(animation.letter3);
              // sentences는 숨김 처리
              setSentence1({ ...sentence1, opacityValue: 0 });
              setSentence2({ ...sentence2, opacityValue: 0 });
              setSentence3({ ...sentence3, opacityValue: 0 });
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    sectionRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.dataset.section = index + 1;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

    // 섹션 생성 함수
    const renderSections = () => {
      return Array(12).fill(null).map((_, index) => (
        <Section key={index + 1}>
          <Observer 
            ref={sectionRefs.current[index]} 
            top={50} 
            data-section={index + 1}
          />
        </Section>
      ));
    };

    return (
      <MainWrapper>
        <VideoBackground autoPlay loop muted src={computer} />
        <Letter {...letter1}>{letter1.text}</Letter>
        <Letter {...letter2}>{letter2.text}</Letter>
        <Letter {...letter3}>{letter3.text}</Letter>
        <Sentence {...sentence1}>{sentence1.text}</Sentence>
        <Sentence {...sentence2}>{sentence2.text}</Sentence>
        <Sentence {...sentence3}>{sentence3.text}</Sentence>
        
        <ApplyButton 
          visible={isLastSectionVisible}
          style={{
            top: '70%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)'
          }}
          onClick={() => navigate('/aboutus')}
        >
          지원하기
        </ApplyButton>
        
        <ScrollContainer>
          {renderSections()}
        </ScrollContainer>
      </MainWrapper>
    );
  };