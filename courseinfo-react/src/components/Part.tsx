import { CoursePart } from '../types';

interface Props {
  part: CoursePart;
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ part } : Props ) => {
    switch (part.kind) {
        case "basic":
            return (
                <p>
                    <div>
                    <b>
                    {part.name} {part.exerciseCount}
                    </b>
                    </div>
                    <i>
                    {part.description}
                    </i>
                </p>
            );
        case "group":
            return (
                <p>
                    <div>
                    <b>
                    {part.name} {part.exerciseCount}
                    </b>
                    </div>
                    <div>
                        project exercises: {part.groupProjectCount}
                    </div>
                </p>
            );
        case "background":
            return (
                <p>
                    <div>
                    <b>
                    {part.name} {part.exerciseCount}
                    </b>
                    </div>
                    <i>
                    {part.description}
                    </i>
                    <div>
                    {part.backgroundMaterial}
                    </div>
                </p>
            );
        case "special":
            return (
                <p>
                    <div>
                    <b>
                    {part.name} {part.exerciseCount}
                    </b>
                    </div>
                    <i>
                    {part.description}
                    </i>
                    <div>
                        required skills: {part.requirements.slice(1).reduce((a,s)=> a+', '+s, part.requirements[0])}
                    </div>
                </p>
            );
        default:
            assertNever(part);
            return (<></>);
    }
};


export default Part;
