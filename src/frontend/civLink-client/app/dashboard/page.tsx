'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import OSCCard from '@/components/OSCCard';
import OpportunityCard from '@/components/OpportunityCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Briefcase, MessageCircle, Plus, Calendar, Bell } from 'lucide-react';
import { posts, oscs, opportunities, statistics } from '@/lib/data';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('feed');

  const featuredOpportunities = opportunities.slice(0, 3);
  const suggestedOSCs = oscs.slice(0, 3);
  const recentPosts = posts;

  const dashboardStats = [
    { label: 'Connexions', value: 156, icon: Users, color: 'text-blue-600' },
    { label: 'Projets', value: 23, icon: Briefcase, color: 'text-green-600' },
    { label: 'Messages', value: 89, icon: MessageCircle, color: 'text-orange-600' },
    { label: 'Notifications', value: 12, icon: Bell, color: 'text-purple-600' }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Bonjour ! 👋</h1>
              <p className="text-orange-100">
                Découvrez les dernières opportunités et connectez-vous avec la communauté OSC
              </p>
            </div>
            <Button className="bg-white text-orange-600 hover:bg-orange-50">
              <Plus className="h-4 w-4 mr-2" />
              Nouveau post
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dashboardStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex space-x-4">
                  <Button
                    variant={activeTab === 'feed' ? 'default' : 'ghost'}
                    onClick={() => setActiveTab('feed')}
                    className="text-sm"
                  >
                    Fil d'actualité
                  </Button>
                  <Button
                    variant={activeTab === 'trending' ? 'default' : 'ghost'}
                    onClick={() => setActiveTab('trending')}
                    className="text-sm"
                  >
                    Tendances
                  </Button>
                  <Button
                    variant={activeTab === 'saved' ? 'default' : 'ghost'}
                    onClick={() => setActiveTab('saved')}
                    className="text-sm"
                  >
                    Sauvegardés
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* Posts */}
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Global Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="h-5 w-5 mr-2 text-orange-600" />
                  Impact Global
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{statistics.oscs.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">OSC connectées</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{statistics.funding}</div>
                  <div className="text-sm text-gray-600">Financements facilités</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{statistics.collaborations.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Collaborations</div>
                </div>
              </CardContent>
            </Card>

            {/* Suggested OSCs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    OSC Suggérées
                  </span>
                  <Button variant="ghost" size="sm">Voir plus</Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {suggestedOSCs.map((osc) => (
                  <div key={osc.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <img
                      src={osc.image}
                      alt={osc.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{osc.name}</p>
                      <p className="text-xs text-gray-500">{osc.country} • {osc.sector}</p>
                    </div>
                    <Button size="sm" variant="outline">Suivre</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-green-600" />
                    Opportunités Récentes
                  </span>
                  <Button variant="ghost" size="sm">Voir plus</Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {featuredOpportunities.map((opportunity) => (
                  <div key={opportunity.id} className="p-3 border rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="text-xs">
                        {opportunity.type === 'financing' ? 'Financement' : 
                         opportunity.type === 'training' ? 'Formation' : 
                         opportunity.type === 'event' ? 'Événement' : 'Partenariat'}
                      </Badge>
                      {opportunity.amount && (
                        <span className="text-xs font-medium text-green-600">{opportunity.amount}</span>
                      )}
                    </div>
                    <h4 className="font-medium text-sm text-gray-900 mb-1 line-clamp-2">
                      {opportunity.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">par {opportunity.organization}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(opportunity.deadline).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                      </span>
                      <Button size="sm" className="text-xs h-6">
                        Voir
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Publier une opportunité
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Inviter une OSC
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Nouveau message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}