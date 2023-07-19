import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiFillTags } from 'react-icons/ai';

import { Latest, Paginate } from '@components';
import { getTotalPages } from '@utils';

const Tag = () => {
  const { tag } = useParams();
  const { tagDetail } = useSelector((state) => state.newsState);
  const tagModified = tag.replace(/-/g, ' ');

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const totalItems = tagDetail.length;
  const totalPages = getTotalPages(totalItems, pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const currentTagsPage = tagDetail.slice(startIndex, endIndex);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-20 pb-10 xl:w-full lg:pb-20 lg:min-h-screen">
      <div className="bg-[#101010] w-full px-5 flex flex-col items-center justify-center py-10 h-36">
        <span className="flex items-center gap-1 text-zinc-400">
          <AiFillTags className="text-xl transition-all lg:text-2xl" />
          TAGS
        </span>
        <h3 className="text-2xl font-medium uppercase">
          &quot;{tagModified}&quot;
        </h3>
      </div>
      <Latest name={tagModified} collection={currentTagsPage} />
      <Paginate
        length={tagDetail.length}
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={changePage}
      />
    </div>
  );
};

export default Tag;
