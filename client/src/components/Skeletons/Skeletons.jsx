import "./Skeletons.css";

export function CourseCardSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-icon" />
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text short" />
      <div className="skeleton-tags">
        <div className="skeleton skeleton-tag" />
        <div className="skeleton skeleton-tag" />
      </div>
      <div className="skeleton skeleton-button" />
    </div>
  );
}

export function CourseDetailsSkeleton() {
  return (
    <div className="skeleton-details">
      <div className="skeleton skeleton-heading" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text long" />
      <div className="skeleton skeleton-text long" />
      <div className="skeleton-tags">
        <div className="skeleton skeleton-tag" />
        <div className="skeleton skeleton-tag" />
      </div>
      <div className="skeleton skeleton-form" />
    </div>
  );
}
