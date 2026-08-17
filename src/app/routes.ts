import { createBrowserRouter } from 'react-router';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { OTPScreen } from './screens/OTPScreen';
import { OnboardingWelcomeScreen } from './screens/OnboardingWelcomeScreen';
import { ChooseCategoryScreen } from './screens/ChooseCategoryScreen';
import { BusinessStageScreen } from './screens/BusinessStageScreen';
import { LocationSetupScreen } from './screens/LocationSetupScreen';
import { CreateProfileScreen } from './screens/CreateProfileScreen';
import { HomeScreen } from './screens/HomeScreen';
import { AskQuestionScreen } from './screens/AskQuestionScreen';
import { DiscussionScreen } from './screens/DiscussionScreen';
import { DiscussionsListScreen } from './screens/DiscussionsListScreen';
import { StoryDetailScreen } from './screens/StoryDetailScreen';
import { MilestonesScreen } from './screens/MilestonesScreen';
import { OpportunitiesScreen } from './screens/OpportunitiesScreen';
import { ConnectionsScreen } from './screens/ConnectionsScreen';
import { ChatScreen } from './screens/ChatScreen';
import { CollaborateScreen } from './screens/CollaborateScreen';
import { LearningScreen } from './screens/LearningScreen';
import { LearningPathDetailScreen } from './screens/LearningPathDetailScreen';
import { LearningContentDetailScreen } from './screens/LearningContentDetailScreen';
import { ContinueLearningListScreen } from './screens/ContinueLearningListScreen';
import { ToolDetailScreen } from './screens/ToolDetailScreen';
import { MyBusinessScreen } from './screens/MyBusinessScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { UserProfileScreen } from './screens/UserProfileScreen';
import { MyPeopleScreen } from './screens/MyPeopleScreen';
import { MessagesScreen } from './screens/MessagesScreen';
import { CustomerDetailScreen } from './screens/CustomerDetailScreen';
import { CustomersListScreen } from './screens/CustomersListScreen';
import { VendorsListScreen } from './screens/VendorsListScreen';
import { AddVendorScreen } from './screens/AddVendorScreen';
import { ShareVendorScreen } from './screens/ShareVendorScreen';
import { ShareJourneyScreen } from './screens/ShareJourneyScreen';
import { AddLessonScreen } from './screens/AddLessonScreen';
import { UpdateMilestoneScreen } from './screens/UpdateMilestoneScreen';
import { HostWorkshopScreen } from './screens/HostWorkshopScreen';
import { MentorsListScreen } from './screens/MentorsListScreen';
import { AskAdviceScreen } from './screens/AskAdviceScreen';
import { BookChatScreen } from './screens/BookChatScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';
import { Layout } from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: WelcomeScreen,
  },
  {
    path: '/otp',
    Component: OTPScreen,
  },
  {
    path: '/onboarding-welcome',
    Component: OnboardingWelcomeScreen,
  },
  {
    path: '/choose-category',
    Component: ChooseCategoryScreen,
  },
  {
    path: '/business-stage',
    Component: BusinessStageScreen,
  },
  {
    path: '/location-setup',
    Component: LocationSetupScreen,
  },
  {
    path: '/create-profile',
    Component: CreateProfileScreen,
  },
  {
    path: '/home',
    Component: Layout,
    children: [
      { index: true, Component: HomeScreen },
    ],
  },
  {
    path: '/connections',
    Component: Layout,
    children: [
      { index: true, Component: ConnectionsScreen },
    ],
  },
  {
    path: '/collaborate',
    Component: Layout,
    children: [
      { index: true, Component: CollaborateScreen },
    ],
  },
  {
    path: '/learning',
    Component: Layout,
    children: [
      { index: true, Component: LearningScreen },
    ],
  },
  {
    path: '/learning/path/:id',
    Component: Layout,
    children: [
      { index: true, Component: LearningPathDetailScreen },
    ],
  },
  {
    path: '/learning/content/:id',
    Component: Layout,
    children: [
      { index: true, Component: LearningContentDetailScreen },
    ],
  },
  {
    path: '/learning/continue',
    Component: Layout,
    children: [
      { index: true, Component: ContinueLearningListScreen },
    ],
  },
  {
    path: '/tools/:id',
    Component: ToolDetailScreen,
  },
  {
    path: '/my-business',
    Component: Layout,
    children: [
      { index: true, Component: MyBusinessScreen },
    ],
  },
  {
    path: '/ask-question',
    Component: AskQuestionScreen,
  },
  {
    path: '/discussion',
    Component: DiscussionsListScreen,
  },
  {
    path: '/discussion/:id',
    Component: DiscussionScreen,
  },
  {
    path: '/story/:id',
    Component: StoryDetailScreen,
  },
  {
    path: '/milestones',
    Component: MilestonesScreen,
  },
  {
    path: '/opportunities',
    Component: OpportunitiesScreen,
  },
  {
    path: '/chat/:id',
    Component: ChatScreen,
  },
  {
    path: '/notifications',
    Component: NotificationsScreen,
  },
  {
    path: '/profile',
    Component: ProfileScreen,
  },
  {
    path: '/profile/:id',
    Component: UserProfileScreen,
  },
  {
    path: '/my-people',
    Component: MyPeopleScreen,
  },
  {
    path: '/messages',
    Component: MessagesScreen,
  },
  {
    path: '/customer/:id',
    Component: CustomerDetailScreen,
  },
  {
    path: '/customers',
    Component: CustomersListScreen,
  },
  {
    path: '/vendors',
    Component: VendorsListScreen,
  },
  {
    path: '/add-vendor',
    Component: AddVendorScreen,
  },
  {
    path: '/share-vendor/:vendorId',
    Component: ShareVendorScreen,
  },
  {
    path: '/create/journey',
    Component: ShareJourneyScreen,
  },
  {
    path: '/create/lesson',
    Component: AddLessonScreen,
  },
  {
    path: '/create/milestone',
    Component: UpdateMilestoneScreen,
  },
  {
    path: '/create/workshop',
    Component: HostWorkshopScreen,
  },
  {
    path: '/mentors',
    Component: MentorsListScreen,
  },
  {
    path: '/mentor/:mentorId/ask-advice',
    Component: AskAdviceScreen,
  },
  {
    path: '/mentor/:mentorId/book-chat',
    Component: BookChatScreen,
  },
  {
    path: '*',
    Component: NotFoundScreen,
  },
]);