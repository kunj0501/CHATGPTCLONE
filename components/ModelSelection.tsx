'use client'

import useSWR from 'swr';
import Select from 'react-select'

const fetchModels = () => fetch('/api/getEngines').then(res => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels); 
  const { data:model,mutate: setmodel } = useSWR('model',{
    fallbackData: 'text-davinci-003'
  })
  return (
    <div className='mt-2'>
      <Select
        className='mt-2'
        options={models?.modelOption}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
            control:(state) => "bg-[#434654] border-[#434654]",
        }}
        onChange= {(e) => setmodel(e.value)}
        
      />
    </div>
  );
}

export default ModelSelection;
