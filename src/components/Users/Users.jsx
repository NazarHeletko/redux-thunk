import { useDispatch, useSelector } from "react-redux"
import { getUsersThunk } from "../../store/reducers/userReducer"


function Users() {
  const users = useSelector(store=>store.users.users)
  const dispatch = useDispatch()
  return (
    <div className="item">
        <button onClick={()=>dispatch(getUsersThunk())}>Get users</button>
        {users.map(el=><h5 key={el.id}>{el.name}</h5>)}
    </div>
  )
}

export default Users