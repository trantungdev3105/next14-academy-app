import { IconCourse, IconOrder, IconStudy } from '@/components/icons'
import IconComment from '@/components/icons/IconComment'
import IconExplorer from '@/components/icons/IconExplorer'
import IconMember from '@/components/icons/IconMember'
import { TMenuItem } from '@/types'

export const menuItems: TMenuItem[] = [
  {
    url: '/',
    title: 'Khám phá',
    icon: <IconExplorer className="size-5" />,
  },
  {
    url: '/study',
    title: 'Khu vực học tập',
    icon: <IconStudy className="size-5" />,
  },
  {
    url: '/manage/cource',
    title: 'Quản lý khóa học',
    icon: <IconCourse className="size-5" />,
  },
  {
    url: '/manage/member',
    title: 'Quản lý thành viên',
    icon: <IconMember className="size-5" />,
  },
  {
    url: '/manage/order',
    title: 'Quản lý đơn hàng',
    icon: <IconOrder className="size-5" />,
  },
  {
    url: '/manage/comment',
    title: 'Quản lý bình luận',
    icon: <IconComment className="size-5" />,
  },
]
