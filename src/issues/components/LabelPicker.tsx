import { FC } from 'react';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { useLabel } from '../hooks/useLabel';

interface Props {
  selectLabels:string[]
  onChange: (labelName:string) => void
}


export const LabelPicker: FC<Props> = ({selectLabels, onChange} ) => {

  const labelsQuery = useLabel();

  if ( labelsQuery.isLoading) {
    return <LoadingIcon/>   
  }

  return (
    <div>
      {
        labelsQuery.data?.map(label => (
          <span 
              key={label.id }
              className={`badge rounded-pill m-1 label-picker ${selectLabels.includes(label.name) ? 'label-active': '' }`}
              style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
              onClick={() => onChange(label.name) }
          >
              { label.name }
          </span>
        ))
      }        
    </div>
  )
}
