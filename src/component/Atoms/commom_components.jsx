let Button = ({ content, classs, func }) => (
    <button className={classs} onClick={func} >
      {content}
    </button>
  );

let P = ({content}) =>(
    <p>{content}</p> 
)     

  export { Button , P};