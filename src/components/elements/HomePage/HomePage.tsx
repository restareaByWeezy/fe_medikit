import HomeLayout from 'components/common/_Layouts/HomeLayout'

import HomePageContent from './_fragments/HomePageContent'

const HomePage = () => {
  return <HomeLayout content={<HomePageContent />} />
}

export default HomePage
