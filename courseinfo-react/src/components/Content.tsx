import { CoursePart } from '../types';
import Part from './Part';

interface Props {
  courseParts: CoursePart[];
}

const Content = ({ courseParts } : Props ) => {
    return (
      <>
          {courseParts.map(p => <Part key={p.name} part={p}/>)}
      </>
    );
};


export default Content;
