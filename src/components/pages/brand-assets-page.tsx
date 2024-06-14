import { HaqqAssetsBlock, IslamicAssetsBlock } from '../ui/brand-assets-block';
import { BrandAssetsTitleBlock } from '../ui/brand-assets-title-block';

export function BrandAssetsPage() {
  return (
    <section>
      <BrandAssetsTitleBlock />
      <HaqqAssetsBlock />
      <IslamicAssetsBlock />
    </section>
  );
}
