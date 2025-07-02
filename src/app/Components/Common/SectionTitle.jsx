import parse from 'html-react-parser';

const SectionTitle = ({Title,SubTitle}) => {
    return (
        <div>
          <h2 className="title wow fadeInUp" data-wow-delay=".4s">{parse(Title)}</h2>
        </div>
    );
};

export default SectionTitle;