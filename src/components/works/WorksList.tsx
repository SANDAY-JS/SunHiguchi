import React, { useContext } from 'react'
import { MenuListProvider } from '../../provider/StateProvider'
import WorkItem from './WorkItem'

const WorksList = () => {
  const {ALL_PROJECTS} = useContext(MenuListProvider)

  return (
    <div className={`flex flex-col gap-10 md:flex-row md:flex-wrap mb-10`}>
        {ALL_PROJECTS.map((menu, i) => (
            <WorkItem menu={menu} key={i} />
        ))}
    </div>
  )
}

export default WorksList