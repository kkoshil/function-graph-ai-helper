
import React, { useRef, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import type { PlotPoint } from '../types';
import { DownloadIcon, FilePdfIcon, LinkIcon } from './icons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


interface GraphCardProps {
  functionExpression: string;
  data: PlotPoint[];
}

const ActionButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}> = ({ icon, label, onClick, disabled, className }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-wait ${className}`}
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </button>
);


export const GraphCard: React.FC<GraphCardProps> = ({ functionExpression, data }) => {
  const graphRef = useRef<HTMLDivElement>(null);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveAsPng = async () => {
    if (!graphRef.current || isSaving) return;
    setIsSaving(true);
    try {
        const canvas = await html2canvas(graphRef.current, { 
            backgroundColor: '#ffffff', 
            useCORS: true,
            logging: false,
            scale: 2
        });
        const link = document.createElement('a');
        link.download = `graph_${functionExpression.replace(/[^a-z0-9]/gi, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch(err) {
        console.error("Failed to save as PNG", err);
        alert('이미지 저장에 실패했습니다.');
    } finally {
        setIsSaving(false);
    }
  };

  const handleSaveAsPdf = async () => {
      if (!graphRef.current || isSaving) return;
      setIsSaving(true);
      try {
          const canvas = await html2canvas(graphRef.current, { 
              backgroundColor: '#ffffff',
              useCORS: true,
              logging: false,
              scale: 2
          });
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF({
              orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
              unit: 'px',
              format: [canvas.width, canvas.height]
          });
          pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
          pdf.save(`graph_${functionExpression.replace(/[^a-z0-9]/gi, '_')}.pdf`);
      } catch(err) {
          console.error("Failed to save as PDF", err);
          alert('PDF 저장에 실패했습니다.');
      } finally {
          setIsSaving(false);
      }
  };

  const handleCopyLink = () => {
      const url = `${window.location.origin}${window.location.pathname}?function=${encodeURIComponent(functionExpression)}`;
      navigator.clipboard.writeText(url).then(() => {
          setIsLinkCopied(true);
          setTimeout(() => setIsLinkCopied(false), 2500);
      });
  };

  return (
    <div ref={graphRef} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 h-[400px] md:h-[500px] lg:h-full flex flex-col animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-bold text-slate-800">
          그래프: <span className="font-mono text-indigo-600">y = {functionExpression}</span>
        </h2>
        <div className="flex items-center flex-wrap gap-2">
            <ActionButton icon={<DownloadIcon className="w-4 h-4"/>} label={isSaving ? '저장중...' : 'PNG'} onClick={handleSaveAsPng} disabled={isSaving} />
            <ActionButton icon={<FilePdfIcon className="w-4 h-4"/>} label={isSaving ? '저장중...' : 'PDF'} onClick={handleSaveAsPdf} disabled={isSaving} />
            <ActionButton 
                icon={<LinkIcon className="w-4 h-4"/>} 
                label={isLinkCopied ? '복사 완료!' : '링크 복사'} 
                onClick={handleCopyLink} 
                className={isLinkCopied ? 'bg-green-100 text-green-700' : ''}
            />
        </div>
      </div>
      <div className="flex-grow h-full">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 5,
                bottom: 20,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
                dataKey="x" 
                type="number" 
                domain={['dataMin', 'dataMax']}
                tick={{ fill: '#64748b', fontSize: 12 }} 
                label={{ value: 'x', position: 'insideBottomRight', offset: -10, fill: '#334155' }}
                axisLine={false}
                tickLine={false}
            />
            <YAxis 
                tick={{ fill: '#64748b', fontSize: 12 }} 
                domain={['auto', 'auto']}
                allowDataOverflow={true}
                axisLine={false}
                tickLine={false}
            />

            <ReferenceLine y={0} stroke="#94a3b8" strokeWidth={1.5} />
            <ReferenceLine x={0} stroke="#94a3b8" strokeWidth={1.5} />
            
            <Tooltip
                contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(4px)',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                }}
                labelStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                formatter={(value: number) => [`${Number(value).toFixed(3)}`, 'y']}
                labelFormatter={(label: number) => `x = ${Number(label).toFixed(3)}`}
            />
            <Legend 
                verticalAlign="top" 
                align="right"
                wrapperStyle={{fontSize: "14px", top: "-10px"}}
                formatter={() => `y = ${functionExpression}`}
            />
            <Line type="monotone" dataKey="y" stroke="#4f46e5" strokeWidth={2.5} dot={false} name={functionExpression} connectNulls={false} />
            </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
