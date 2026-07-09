import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/data_studio.png";
import Tools2 from "/assets/tools/vscode.png";
import Tools3 from "/assets/tools/canva.png";
import Tools4 from "/assets/tools/PowerBI.png";
import Tools5 from "/assets/tools/github.png";
import Tools6 from "/assets/tools/microsoftexcel.png";
import Tools7 from "/assets/tools/spsslogo.png";
import Tools8 from "/assets/tools/logoeviews.png";
import Tools9 from "/assets/tools/Spreadsheet.png";
import Tools10 from "/assets/tools/mysqllogo.png";
import Tools11 from "/assets/tools/logoR.png";
import Tools12 from "/assets/tools/RStudio.png";
import Tools13 from "/assets/tools/googlecolablogo.png";
import Tools14 from "/assets/tools/googlebigquery.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Google Data Studio",
    ket: "Dashboard",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Canva",
    ket: "Design App",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Power BI",
    ket: "Dashboard",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Github",
    ket: "Repository",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Microsoft Excel",
    ket: "Data Analysis",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "SPSS",
    ket: "Statistical Software",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Eviews",
    ket: "Statistical Software",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Google Spreadsheet",
    ket: "Spreadsheet",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "MySQL",
    ket: "Database",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "R",
    ket: "Statistical Software",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "RStudio",
    ket: "Statistical Software",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Google Colab",
    ket: "Development Environment",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Google BigQuery",
    ket: "Data Warehouse",
    dad: "1400",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek7 from "/assets/proyek/Proyek7.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/Proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Cervice Center Monitoring Dashboard",
    desk: "Built a multi-branch, multi-brand Looker Studio dashboard surfacing 60+ outstanding service processes, improving cross-branch performance visibility.",
    tools: ["Spreadsheets", "Google Data Studio", "Canva"],
    link: "https://datastudio.google.com/reporting/5645a0f4-acc3-4a3f-943c-1653fff9e70a",
    dad: "200",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Portofolio Website",
    desk: "Designed and developed a personal portfolio website using React and Vite, deployed via GitHub to showcase data analytics projects and skills.",
    tools: ["VS Code", "Canva", "Github "],
    link: "",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "KPI Technition Team Dashboard",
    desk: "Developed a real-time KPI dashboard tracking technician team performance, installation targets, and defect rates using Google Data Studio.",
    tools: ["Spreadsheets", "Google Data Studio", "Canva","Vite","React JS"],
    link: "https://datastudio.google.com/reporting/308be374-d0d6-4f30-bbb2-6c8ec6d1949a",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Operational Tracking Check Dashboard",
    desk: "Built an operational tracking dashboard integrating Google Forms field data with Looker Studio visualization for daily monitoring.",
    tools: ["Spreadsheets", "Google Data Studio", "Canva","Google Forms"],
    link: "https://datastudio.google.com/reporting/5353951d-7a9e-4b1a-8ac7-a2092dc2d2b7",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Hybrid K-Medoids Clustering & Genetic Algorithm Computer Program",
    desk: "Built a hybrid clustering program combining K-Medoids and Genetic Algorithm optimization in R for statistical group analysis.",
    tools: ["Google Colaboratory","R","R Studio","SPSS","Microsoft Excel"],
    link: "https://drive.google.com/drive/folders/1HbnyvZZmNmkuyz9jda-hfXGINPTrIbSg?usp=sharing",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Indonesian Water Quality Index Classification for Lecturer Project",
    desk: "Classified Indonesian water quality index status using statistical modeling in R and SPSS as part of a lecturer-led research project.",
    tools: ["Microsoft Excel","Google Colaboratory","Google Spreadsheet","SPSS","R","R Studio"],
    link: "https://drive.google.com/drive/folders/1K1NYpUEYdd8J0yJKd2MmKp4rs9kDcyf_?usp=sharing",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Sentimen Classification for Instagram Reels Posts using Machine Learning",
    desk: "Built a sentiment classification model for Instagram Reels comments using machine learning in R with text preprocessing techniques.",
    tools: ["Google Colaboratory","Microsoft Excel","Google Spreadsheet","R","R Studio"],
    link: "https://drive.google.com/drive/folders/1P6ThjUmprM09FM_B8MmKSBOQe7p1B8eq?usp=sharing",
    dad: "700",
  },
];
