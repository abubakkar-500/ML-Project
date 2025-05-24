import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

interface Reference {
  id: number;
  title: string;
  authors: string;
  publication: string;
  year: string;
  link: string;
}

const References: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const references: Reference[] = [
    {
      id: 1,
      title: "ST-CGAN: Shadow Detection and Removal Using Stacked Conditional GANs",
      authors: "Wang, Z., et al. ",
      publication: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR),",
      year: " 2018 ",
      link: "https://openaccess.thecvf.com/content_cvpr_2018/html/Wang_ST-CGAN_Shadow_Detection_CVPR_2018_paper.html"
    },
    {
      id: 2,
      title: "STGAN: A Unified Framework for Shadow Removal and Detection",
      authors: "Gong, W., Liu, H., et al.",
      publication: "IEEE Transactions on Image Processing,",
      year: "2020",
      link: "https://ieeexplore.ieee.org/document/9098870"
    },
    {
      id: 3,
      title: "GP-GAN: Towards Realistic High-Resolution Image Blending",
      authors: "Wu, H., Zheng, S., Zhang, J., Huang, K.",
      publication: "ACM International Conference on Multimedia",
      year: "2019",
      link: "https://dl.acm.org/doi/10.1145/3343031.3351048"
    },
    {
      id: 4,
      title: "MaskShadow-GAN: Learning to Remove Shadows from Unpaired Data",
      authors: "Hu, X., Fu, C.W., Zhu, L., Heng, P.A.",
      publication: "IEEE International Conference on Computer Vision (ICCV)",
      year: "2019",
      link: "https://openaccess.thecvf.com/content_ICCV_2019/html/Hu_MaskShadow-GAN_Learning_to_Remove_Shadows_from_Unpaired_Data_ICCV_2019_paper.html"
    },    
    {
      id: 5,
      title: "Physics-based Shadow Image Decomposition for Shadow Removal",
      authors: "Zhu, L., Wen, Z., Bian, S., Zhang, L., Tan, P.",
      publication: "ACM Transactions on Graphics (TOG)",
      year: "2021",
      link: "#"
    },
    {
      id: 6,
      title: "Auto-Exposure Fusion for Single-Image Shadow Removal",
      authors: "Fu, L., Zhou, C., Gong, Q., Sun, J., Yu, Y.",
      publication: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: "2021",
      link: "#"
    }
  ];

  return (
    <section
      id="references"
      ref={sectionRef}
      className="py-20 bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <SectionTitle>References</SectionTitle>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            {references.map((reference, index) => (
              <div
                key={reference.id}
                className={`bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all duration-700 delay-${index * 100} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <h3 className="text-lg font-medium text-slate-800">{reference.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{reference.authors}</p>
                <p className="text-slate-500 text-sm mt-1">
                  {reference.publication}, {reference.year}
                </p>
                <div className="mt-2">
                  <a
                    href={reference.link}
                    className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    Read Paper
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-10 p-6 bg-purple-50 rounded-lg border border-purple-100 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
            <h3 className="text-lg font-semibold mb-3 text-purple-800">Datasets Used</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              {/* <li>
                <span className="font-medium">SRD (Shadow Removal Dataset)</span> - 
                3,000+ paired images of the same scenes with and without shadows.
              </li> */}

              <span className="font-medium"><h4>ISTD Dataset (Image Shadow Triplets Dataset)</h4></span>
              <div>
                <li>Input image with shadows</li>
                <li>Shadow mask (ground truth shadow detection)</li>
                <li>Shadow-free image (ground truth shadow removal)</li>
              </div>
              {/* <li>
                <span className="font-medium">USR (Unpaired Shadow Removal Dataset)</span> - 
                2,000+ unpaired shadow/shadow-free images for unsupervised learning.
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;