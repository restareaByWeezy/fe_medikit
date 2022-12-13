import HomeLayout from 'components/common/_Layouts/layouts/HomeLayout/HomeLayout'

import HomePageContent from './_fragments/HomePageContent'

const HomePage = () => {
  return <HomeLayout content={<HomePageContent />} />
}

export default HomePage
