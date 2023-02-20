import { useQuery } from "@tanstack/react-query"
import { githubApi } from '../../api/githubApi';
import { Label } from "../interfaces/label";

export const LabelPicker = () => {

  const getLabel = async():Promise<Label[]> =>{
    const { data } = await githubApi.get<Label[]>('labels');
    return data; 
  }

  const laberQuery = useQuery(
    ['labels'],
    getLabel,
    {
      refetchOnWindowFocus: false
    }

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
