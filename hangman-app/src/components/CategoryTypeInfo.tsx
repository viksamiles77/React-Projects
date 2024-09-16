import "../styles/CategoryTypeInfo.css"

interface CategoryTypeInfoProps {
  selectedCategory: string;
}

const CategoryTypeInfo = ({selectedCategory}: CategoryTypeInfoProps) => {
  return (
    <h3>Category: {selectedCategory}</h3>
  );
};

export default CategoryTypeInfo;