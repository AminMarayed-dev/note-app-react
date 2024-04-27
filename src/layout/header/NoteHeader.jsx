import React from 'react'
import SortSelect from '../../components/sort-select/SortSelect'

function NoteHeader() {
  return (
    <div className='flex justify-evenly items-center w-3/4 border-b-2 pb-6 border-b-slate-400'>
        <h3 className='text-[32px]'>My Notes (0)</h3>
        <SortSelect/>
    </div>
  )
}

export default NoteHeader