import { useContext, useEffect } from 'react'
import AppContext from '../context/app/appContext';
import sections from '../data/sections.json';

const SidebarHeader = () => {
  return (<h4 className="sidebar-header">Fields</h4>);
}

const SidebarFooter = () => {
  const { sidebarData, setSidebarData } = useContext(AppContext);
  const handleSelect = () => {
    const tempData = sidebarData.map(item => {
      return { ...item, isChecked: true }
    })
    setSidebarData(tempData);
  }
  return (<div className="sidebar-footer">
    <button type="button" className="btn btn-primary btn-sm" onClick={handleSelect}>Select all</button>
    <button type="button" className={`btn btn-primary btn-sm ${sidebarData.filter(item => item.isChecked === true).length === 0 && 'disabled'}`} data-bs-toggle="modal" data-bs-target="#confirmationModal">Confirm</button>
  </div>);
}

const SidebarBody = () => {
  const { sidebarData, setSidebarData } = useContext(AppContext);
  const handleChange = id => {
    const tempData = sidebarData.map(item => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked }
      } return { ...item }
    })
    setSidebarData(tempData);
  };
  const handleRemove = id => {
    const tempData = sidebarData.filter(item => item.id !== id)
    setSidebarData(tempData);
  };
  return (<div className="sidebar-body">
    {sidebarData.map(item => {
      return (<div key={item.id} className="sidebar-body-list">
        <div className="d-flex justify-content-between">
          <div style={{ width: '10%', color: item.color }}>{item.initials}</div>
          <div style={{ width: '70%' }}>{item.label}</div>
          <div style={{ width: '10%' }}>
            <input type="checkbox" checked={item.isChecked} onChange={() => handleChange(item.id)}></input>
          </div>
          <div style={{ width: '10%' }}>
            <span type="button"
              style={{ fontSize: '10px' }}
              onClick={() => handleRemove(item.id)}>DEL</span>
          </div>
        </div>
        <div>{item.value}</div>
      </div>)
    })}
  </div>);
}

const Sidebar = () => {
  const { setSidebarData } = useContext(AppContext)
  useEffect(() => {
    const tempData = sections.data.sections[0].children.map(item => {
      if (item.content && item.content.value && item.content.position.length > 0) {
        return {
          id: item.id,
          label: item.label,
          value: item.content.value,
          position: item.content.position,
          initials: item.label.split(' ')[0].charAt(0).toUpperCase() + item.label.split(' ')[1].charAt(0).toUpperCase(),
          isChecked: true,
          color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
        }
      } return null;
    }).filter(item => item !== null);
    setSidebarData(tempData)
  }, [])
  return (<>
    <div className="sidebar">
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter />
    </div>

    {/* Modal to show when confirm button is clicked */}
    <div className="modal fade" id="confirmationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to confirm the selected fields?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#approvedModal">Save</button>
          </div>
        </div>
      </div>
    </div>

    {/* Modal to show after save button from confirmation modal is clicked */}
    <div className="modal fade" id="approvedModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Done!</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Fields confirmed and processed successfully!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Sidebar
