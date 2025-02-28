import styled from "styled-components";
import { Chip, Box } from "@mui/material";
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
  background-color: #f2f5f8;
  padding-bottom: 50px;
  width: 100%;
  margin-top: 5vh;

  @media (max-width: 768px) {
    padding: 16px;
    margin-top: 7vh;
  }
`;

const ImageFrame = styled.img`
  max-width: 1200px;
  width: 90%;
  height: 580px;
  margin: 40px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 12px;

  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 30px;
  }
`;

const TitleFrame = styled.div`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  padding: 0 16px;

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
  padding: 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
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
    padding: 16px;
    min-width: auto;

    &:hover {
      transform: none;
    }
  }

  .icon {
    font-size: 48px;
    color: #0077b6;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 36px;
      margin-bottom: 12px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-bottom: 8px;
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
  width: 1200px;
  margin-top: 40px;
  overflow-wrap: break-word;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
    margin-top: 30px;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    margin: 1rem 0;
    
    @media (max-width: 768px) {
      width: 100%;
      margin: 0.5rem 0;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }

  p {
    font-size: 16px;
    color: #555;
    line-height: 1.8;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 1.6;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    overflow-x: auto;
    display: block;

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 16px 0;
    }
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;

    @media (max-width: 768px) {
      padding: 6px;
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
      } catch {}
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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
              justifyContent: "center",
            }}
          >
            {Array.isArray(projectDetail.type)
              ? projectDetail.type.map((tech, index) => (
                  <Chip key={index} label={tech} />
                ))
              : projectDetail.type && <Chip label={projectDetail.type} />}
          </Box>
        </Card>
      </InfoSection>

      <ExplanationFrame>
        <h2>프로젝트 설명</h2>
        {readmeContent && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {readmeContent}
          </ReactMarkdown>
        )}
      </ExplanationFrame>
    </Container>
  );
};
