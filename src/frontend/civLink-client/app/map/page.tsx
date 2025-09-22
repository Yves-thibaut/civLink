'use client';

import { useState } from 'react';
import Layout from '@/src/frontend/components/Layout';
import OSCCard from '@/src/frontend/components/OSCCard';
import { Badge } from '@/src/frontend/components/ui/badge';
import { Button } from '@/src/frontend/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/frontend/components/ui/card';
import { MapPin, Users, Briefcase, Filter } from 'lucide-react';
import { oscs, sectors } from '@/src/frontend/lib/data';

export default function MapPage() {
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedOSC, setSelectedOSC] = useState<string | null>(null);

  const sectorColors: Record<string, string> = {
    'Paix & Gouvernance': '#3B82F6',
    'Environnement': '#10B981',
    'Santé': '#EF4444',
    'Éducation': '#8B5CF6',
    'Genre & Droits humains': '#EC4899',
    'Jeunesse & Innovation': '#F97316',
    'Culture & Patrimoine': '#F59E0B',
    'Agriculture & Sécurité Alimentaire': '#059669'
  };

  const filteredOSCs = selectedSector === 'all' 
    ? oscs 
    : oscs.filter(osc => osc.sector === selectedSector);

  const countryGroups = filteredOSCs.reduce((acc, osc) => {
    if (!acc[osc.country]) {
      acc[osc.country] = [];
    }
    acc[osc.country].push(osc);
    return acc;
  }, {} as Record<string, typeof oscs>);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Carte Interactive des OSC</h1>
          <p className="text-gray-600">
            Explorez la répartition géographique des {oscs.length} OSC à travers l'Afrique
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map and Legend */}
          <div className="lg:col-span-3 space-y-6">
            {/* Interactive Map Placeholder */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                    Carte de l'Afrique - Répartition des OSC
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Filter className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {filteredOSCs.length} OSC affichées
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Stylized Africa Map */}
                <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 min-h-[500px] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-5" />
                  <div className="text-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <MapPin className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Carte Interactive Panafricaine</h3>
                    <p className="text-gray-600 max-w-md mb-4">
                      Visualisez en temps réel la répartition de {filteredOSCs.length} OSC à travers l'Afrique 
                      avec des marqueurs interactifs colorés par secteur d'activité.
                    </p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        Paix & Gouvernance
                      </span>
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        Environnement
                      </span>
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        Santé
                      </span>
                    </div>
                  </div>
                  
                  {/* Sample Location Pins */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse" title="Cameroun - CIDP" />
                    <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse" title="Kenya - Green Belt Movement" />
                    <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse" title="Mali - Médecins d'Afrique" />
                    <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-purple-500 rounded-full animate-pulse" title="Sénégal - EduAfrica" />
                    <div className="absolute top-2/3 left-2/5 w-4 h-4 bg-pink-500 rounded-full animate-pulse" title="Ghana - Women Empowerment Hub" />
                    <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-orange-500 rounded-full animate-pulse" title="Nigeria - Africa Youth Network" />
                  </div>
                </div>
                
                {/* Legend */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Légende par secteur</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.entries(sectorColors).map(([sector, color]) => (
                      <div key={sector} className="flex items-center space-x-2">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-sm text-gray-700">{sector}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Country Groups */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">OSC par pays</h2>
              {Object.entries(countryGroups).map(([country, countryOSCs]) => (
                <Card key={country}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{countryOSCs[0].countryFlag}</span>
                        <span>{country}</span>
                      </div>
                      <Badge variant="outline">
                        {countryOSCs.length} OSC{countryOSCs.length > 1 ? 's' : ''}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {countryOSCs.map((osc) => (
                        <div
                          key={osc.id}
                          className="p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => setSelectedOSC(selectedOSC === osc.id ? null : osc.id)}
                        >
                          <div className="flex items-center space-x-3">
                            <img
                              src={osc.image}
                              alt={osc.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 truncate">{osc.name}</h4>
                              <p className="text-sm text-gray-600">{osc.sector}</p>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-xs text-gray-500 flex items-center">
                                  <Users className="h-3 w-3 mr-1" />
                                  {osc.members}
                                </span>
                                <span className="text-xs text-gray-500 flex items-center">
                                  <Briefcase className="h-3 w-3 mr-1" />
                                  {osc.projects}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Filter by Sector */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filtrer par secteur</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedSector === 'all' ? 'default' : 'outline'}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setSelectedSector('all')}
                >
                  Tous les secteurs ({oscs.length})
                </Button>
                {sectors.slice(1).map((sector) => {
                  const count = oscs.filter(osc => osc.sector === sector).length;
                  if (count === 0) return null;
                  
                  return (
                    <Button
                      key={sector}
                      variant={selectedSector === sector ? 'default' : 'outline'}
                      size="sm"
                      className="w-full justify-start text-left"
                      onClick={() => setSelectedSector(sector)}
                    >
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: sectorColors[sector] || '#6B7280' }}
                      />
                      <div className="flex-1 text-left truncate">
                        {sector} ({count})
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Regional Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistiques régionales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {Object.keys(countryGroups).length}
                  </div>
                  <div className="text-sm text-gray-600">Pays représentés</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {filteredOSCs.reduce((sum, osc) => sum + osc.members, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Membres total</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">
                    {filteredOSCs.reduce((sum, osc) => sum + osc.projects, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Projets actifs</div>
                </div>
              </CardContent>
            </Card>

            {/* Selected OSC Detail */}
            {selectedOSC && (
              <div className="space-y-4">
                {oscs
                  .filter(osc => osc.id === selectedOSC)
                  .map(osc => (
                    <OSCCard key={osc.id} osc={osc} />
                  ))}
              </div>
            )}

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Télécharger la carte
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Exporter les données
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Partager la vue
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}