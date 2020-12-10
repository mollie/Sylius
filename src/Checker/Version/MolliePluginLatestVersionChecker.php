<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Checker\Version;

use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Psr7\Uri;
use Psr\Http\Message\UriInterface;

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
        try {
            $hubResponse = $this->client->request('GET', $this->hubUri);
        } catch (GuzzleException $exception) {
            return null;
        }

        $hubResponse = json_decode($hubResponse->getBody()->getContents(), true);

        return $this->getMolliePluginLatestVersion($hubResponse);
    }

    private function getMolliePluginLatestVersion(array $data): ?string
    {
        $latestVersion = end($data['packages']['bitbag/mollie-plugin']);

        if (isset($latestVersion['version'])) {
            return $latestVersion['version'];
        }

        return null;
    }
}
