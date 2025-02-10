import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectApi } from "../../shared/api/projectApi";
import FolderIcon from "@mui/icons-material/Folder";
import CategoryIcon from "@mui/icons-material/Category";
import CodeIcon from "@mui/icons-material/Code";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { fetchGitHubReadme } from "../../shared/api/githubApi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f3f4f6;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ImageFrame = styled.img`
  width: 100%;
  height: 580px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const TitleFrame = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    color: #555;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Card = styled.div`
  flex: 1 1 calc(33% - 20px);
  min-width: 280px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    transition: 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }

  .icon {
    font-size: 48px;
    color: #0077b6;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    color: #555;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const ExplanationFrame = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  margin-top: 40px;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    color: #555;
    line-height: 1.8;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const ShareDetail = () => {
  const [projectDetail, setProjectDetail] = useState({});
  const [readmeContent, setReadmeContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchProjectDetail = async () => {
      try {
        const detail = await projectApi.getProjectDetail(id);
        setProjectDetail(detail);

        if (detail.link) {
          const readme = await fetchGitHubReadme(detail.link);
          setReadmeContent(readme);
        }
      } catch (error) {
        console.error("Error fetching project detail:", error);
      }
    };

    if (id) {
      fetchProjectDetail();
    }
  }, [id]);

  return (
    <Container>
      <ImageFrame src={projectDetail.imageUrl} alt="project image" />

      <TitleFrame>
        <h1>{projectDetail.title}</h1>
        <h2>{projectDetail.subTitle}</h2>
      </TitleFrame>

      <InfoSection>
        <Card>
          <CategoryIcon className="icon" />
          <h3>프로젝트 형태</h3>
          <p>{projectDetail.category}</p>
        </Card>

        <Card>
          <FolderIcon className="icon" />
          <h3>프로젝트 유형</h3>
          <p>{projectDetail.tag}</p>
        </Card>

        <Card>
          <CodeIcon className="icon" />
          <h3>사용 기술</h3>
          <p>{projectDetail.type}</p>
        </Card>
      </InfoSection>

      <ExplanationFrame>
        <h2>프로젝트 설명</h2>
        {readmeContent && (
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {readmeContent}
          </ReactMarkdown>
        )}
      </ExplanationFrame>
    </Container>
  );
};