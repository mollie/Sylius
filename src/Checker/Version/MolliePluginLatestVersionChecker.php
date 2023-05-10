<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Checker\Version;

use GuzzleHttp\ClientInterface;
//use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Psr7\Uri;
use Psr\Http\Message\UriInterface;
use SyliusMolliePlugin\SyliusMolliePlugin;

final class MolliePluginLatestVersionChecker implements MolliePluginLatestVersionCheckerInterface
{
    /** @var ClientInterface */
    private $client;

    /** @var UriInterface */
    private $hubUri;

    public function __construct(
        ClientInterface $client,
        string $hubUri
    ) {
        $this->client = $client;
        $this->hubUri = new Uri($hubUri);
    }

    public function checkLatestVersion(): ?string
    {

        return SyliusMolliePlugin::VERSION;
//        try {
//            $hubResponse = $this->client->request('GET', $this->hubUri);
//        } catch (GuzzleException $exception) {
//            return null;
//        }
//checkLatestVersion
//        $hubResponse = json_decode($hubResponse->getBody()->getContents(), true);
//
//        return $this->getMolliePluginLatestVersion($hubResponse);
    }

    private function getMolliePluginLatestVersion(array $data): ?string
    {
        $latestVersion = end($data['packages']['mollie/sylius-plugin']);

        if (isset($latestVersion['version'])) {
            return $latestVersion['version'];
        }

        return null;
    }
}
