import React from "react";

const Details = ({ position, work }) => (
  <div className="flex flex-col items-start justify-between my-8">
    <h3 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75" >
      {position}
    </h3>
    <ul
      className="pl-4"
      dangerouslySetInnerHTML={{ __html: work }}
    ></ul>
  </div>
);

const ProgrammingSkills = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl mt-20 mb-2 w-full text-left md:text-4xl xs:text-2xl " style={{ color: '#5888FF' }}>
        Skills
      </h2>
      <div className="ml-2  grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-5">
        <div>
          <Details
            position="Python"
            work="Pandas, Numpy, SciPy, Matplotlib, streamlit, scikit-learn, pickle, BeautifulSoup, Scrapy, 
            request, geopandas, NLTK, Plotly, Seaborn, TensorFlow, Pytorch, flask, OpenAI"
          />

          <Details
            position="Web Development"
            work="HTML5, CSS, JavaScript, Tailwind CSS, React, Next.js"
          />
          <Details
            position="Cloud Technologies"
            work="Azure (Databricks, Data Factory, DevOps, LogicApps)"
          />

          
        </div>

        <div>
        <Details
            position="SQL"
            work="SQL Server, PostgreSQL, MySQL, SQLite, Oracle Database, Snowflake, Microsoft Azure SQL Database, MongoDB"
          />
        <Details
            position="Visualization"
            work="Tableau, Microsoft PowerBI, Looker Studio, QlikView"
          />
          
          <Details
            position="Collaboration"
            work="Git, Github, Slack, Microsoft, Google, Salesforce, Jira, Scrum, Agile"
          />
        </div>

        <div>
        <Details
            position="Development Tools"
            work="Visual Studio Code, Pycharm, Spyder, RStudio, Jupyter Notebook, SQL Server Management Studio (SSMS)"
          />
          

          

          <Details
            position="Design"
            work="Figma, AdobeXD, Sketch, Canva"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgrammingSkills;
