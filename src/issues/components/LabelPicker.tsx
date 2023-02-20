import { useQuery } from "@tanstack/react-query"

export const LabelPicker = () => {

  const getLabel = async() =>{
    const res = await fetch('https://api.github.com/repos/facebook/react/labels');
    const data= res.json();
    console.log(data);
    return data; 
  }

  const laberQuery = useQuery(
    ['labels'],
    getLabel,
  )


  return (
    <div>
        <span 
            className="badge rounded-pill m-1 label-picker"
            style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
        >
            Primary
        </span>
        
    </div>
  )
}
