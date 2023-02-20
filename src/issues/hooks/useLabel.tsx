import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../interfaces/label';


const getLabel = async():Promise<Label[]> => {
    const { data } = await githubApi.get<Label[]>('/labels');
    return data; 
}

export const useLabel = () => {

      const labelsQuery = useQuery(
        ['labels'],
        getLabel    
      )


  return labelsQuery;  
  
}