import Loadable from 'react-loadable'

import Loader from '../../../components/Core/Loader'

export default Loadable({
    loader: () => import('./index'),
    loading: Loader,
})
