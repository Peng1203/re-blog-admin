import { ListApiBaseResponse } from 'Api';
import { TagData } from '@/views/article/tag';
import { CategoryData } from '@/views/article/category';
import { UserData } from '@/views/user/user';

/**
 * 文章类型枚举
 */
export enum ArticleTypeEnum {
  /** 原创 */
  ORIGINAL = 1,
  /** 转载 */
  REPRINT = 2,
  /** 翻译 */
  TRANSLATE = 3,
}

/**
 * 文章状态枚举
 */
export enum ArticleStatusEnum {
  /** 已发布 */
  PUBLISHED = 1,
  /** 私密 */
  PRIVATE = 2,
  /** 草稿箱 */
  DRAFT = 3,
  /** 已删除 */
  DELETED = 4,
  /** 待审核 */
  PENDING_REVIEW = 5,
  /** 已拒绝 */
  REJECTED = 6,
}

export interface ArticleData {
  id: number;
  title: string;
  content: string;
  cover: string;
  likes: number;
  views: number;
  /** 文章类型: 1原创 2转载 3翻译 */
  type: ArticleTypeEnum;
  /** 文章状态: 1已发布 2私密 3草稿箱 4已删除 5待审核 6已拒绝 */
  status: ArticleStatusEnum;
  /** 是否置顶 */
  isTop: BolEnum;
  tags: TagData[];
  category: CategoryData;
  author: TypeOmit<UserData, 'password'>;
  createTime: string;
  updateTime: string;
}

export type ArticleListData = ListApiBaseResponse<ArticleData>;

export type AddArticleType = Optional<ArticleData, 'likes' | 'views' | 'createTime' | 'updateTime'>;

export interface EditProps {
  editRow: ArticleData;
}

export interface FilterParamsInfo {
  queryStr: string;
  /** 文章类型: 1原创 2转载 3翻译 */
  type: ArticleTypeEnum | 0;
  /** 文章状态: 1已发布 2私密 3草稿箱 4已删除 5待审核 6已拒绝 */
  status: ArticleStatusEnum | 0;
  /** 作者ID */
  authorId: number;
  /** 分类ID */
  categoryId: number;
  /** TagId */
  tagId: number;
  /** 时间过滤 */
  timeVal: [string, string];
}

export interface FilterHeadendProps {
  modelValue: FilterParamsInfo;
}

// 文章列表item 组件props
export interface ArticleItemProps {
  article: ArticleData;
}
